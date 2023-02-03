export class CodeLineNumbers {
  static readonly DEFAULT_SELECTOR = 'pre > code';
  static readonly START_INDEX = 1;

  static addCodeLineNumbers(selector: string = this.DEFAULT_SELECTOR, start: number = this.START_INDEX) {
    const els = document.querySelectorAll(selector);
    for (let i = 0; i < els.length; i++) this.addLineNumbersTo(els[i] as HTMLElement, start);
  }

  static addLineNumbersTo(elCode: HTMLElement, start: number) {
    const el: HTMLSpanElement = elCode.firstChild as HTMLSpanElement;
    if (el && el.classList && el.classList.contains('hljs-number')) return;

    const lines: Array<string> = elCode.innerHTML.split('\n');
    if (lines.length === 0 || (lines.length === 1 && lines[0].length === 0)) return;

    const digitCount: number = ('' + lines.length).length;
    elCode.innerHTML = lines
      .map((line: string, lineIndex: number) => {
        const lineNumber: number = lineIndex + start;
        const zeros: string = '0'.repeat(digitCount - lineNumber.toString().length);
        return `<span class="code-line-numbers__number"><span class="code-line-numbers__number__zeros">${zeros}</span>${lineNumber}</span> ${line}`;
      })
      .join('\n');
  }
}
