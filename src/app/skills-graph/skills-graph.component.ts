import {
  AfterViewInit,
  Component,
  effect,
  inject,
  Injector,
  OnInit,
  runInInjectionContext,
  signal,
} from '@angular/core';
import { ApiService } from '../services/api.service';
import * as d3 from 'd3';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-skills-graph',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './skills-graph.component.html',
  styleUrl: './skills-graph.component.css',
})
export class SkillsGraphComponent implements AfterViewInit {
  skillsData = signal<{ skill: string; value: number }[]>([]);
  private injector = inject(Injector);

  constructor(private apiService: ApiService) {
    effect(() => {
      this.apiService.getExperience().subscribe({
        next: (res) => {
          const result = Array.isArray(res) ? res : [res];

          // Count skills
          const skillMap = new Map<string, number>();

          result.forEach((exp) => {
            const skills = exp.skills.split(',').map((s) => s.trim()); // Split and trim

            skills.forEach((skill) => {
              skillMap.set(skill, (skillMap.get(skill) || 0) + 1);
            });
          });

          // Convert to array
          const chartData = Array.from(skillMap, ([skill, value]) => ({
            skill,
            value,
          }));
          this.skillsData.set(chartData);
        },
        error: (err) => console.error('Error fetching experience', err),
      });
    });
  }
  ngAfterViewInit(): void {
    runInInjectionContext(this.injector, () => {
      effect(() => {
        const data = this.skillsData();
        const barWidth = 40;
        const chartWidth = data.length * barWidth;

        const margin = { top: 40, right: 20, bottom: 100, left: 60 };
        const width = chartWidth + margin.left + margin.right;

        const height = 400;

        const svg = d3
          .select('#chart')
          .append('svg')
          .attr('width', width)
          .attr('height', height);

        // Define x and y scales
        const x = d3
          .scaleBand()
          .domain(data.map((d) => d.skill))
          .range([margin.left, chartWidth + margin.left])
          .padding(0.1);

        const y = d3
          .scaleLinear()
          .domain([0, d3.max(data, (d) => d.value)!])
          .range([height - margin.bottom, margin.top]);

        // Add bars
        svg
          .selectAll('rect')
          .data(data)
          .enter()
          .append('rect')
          .attr('x', (d) => x(d.skill)!)
          .attr('y', (d) => y(d.value))
          .attr('width', x.bandwidth())
          .attr('height', (d) => height - margin.bottom - y(d.value))
          .attr('fill', 'steelblue')
          .on('mouseover', function () {
            d3.select(this).attr('fill', 'darkorange');
          })
          .on('mouseout', function () {
            d3.select(this).attr('fill', 'steelblue');
          });

        // Add x-axis
        svg
          .append('g')
          .attr('transform', `translate(0, ${height - margin.bottom})`)
          .call(d3.axisBottom(x))
          .selectAll('text')
          .style('text-anchor', 'end')
          .attr('dx', '-0.8em')
          .attr('dy', '0.15em')
          .attr('transform', 'rotate(-40)');

        // Add y-axis
        svg
          .append('g')
          .attr('transform', `translate(${margin.left}, 0)`)
          .call(d3.axisLeft(y));
      });
    });
  }
}
