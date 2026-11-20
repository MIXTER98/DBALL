import { DecimalPipe } from '@angular/common';
import { Component, Input } from '@angular/core';

const MAX_PODER = 1000000;

@Component({
  imports: [DecimalPipe],
  selector: 'app-power-level-card',
  standalone: true,
  template: `
    <div class="mt-3">
  <div class="flex items-baseline justify-between mb-1.5">
    <span class="text-[11px] font-semibold tracking-wider uppercase text-slate-400">
      Power Level
    </span>
    <span class="text-xs font-mono font-bold text-cyan-300">
      {{ poderNormalizado | number}}
    </span>
  </div>

  <div
    class="h-2.5 w-full bg-slate-800 border border-slate-700/80 rounded-full overflow-hidden p-0.5"
    role="progressbar"
    [attr.aria-valuenow]="poderNormalizado"
    aria-valuemin="0"
    [attr.aria-valuemax]="maxPoder"
  >
    <div
      class="h-full rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-500 shadow-[0_0_10px_rgba(34,211,238,0.45)] transition-all duration-500 ease-out"
      [style.width.%]="anchoBarra"
    ></div>
  </div>
</div>
  `
})
export class PowerLevelCard {
  @Input() poder: number | string = 0;
  readonly maxPoder = MAX_PODER;

  get poderNormalizado(): number{
    const valor = Number(this.poder);
    if(Number.isNaN(valor)) return 0;
    return Math.min(Math.max(valor, 0), MAX_PODER)
  }

  get anchoBarra(): number{
    return (this.poderNormalizado/MAX_PODER)*100
  }
}
