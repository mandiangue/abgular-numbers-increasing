import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'numbers increase';
  @ViewChildren('nombre') numberInc!: QueryList<ElementRef>



  ngAfterViewInit() {

    this.numberInc.forEach((item) => {
      const value = parseInt(item.nativeElement.dataset.value)
      Math.ceil(value / 1000)
      let initialValue = 0

      const increaseCount: any = setInterval(() => {
        initialValue += increaseCount
        if (initialValue > value) {
          item.nativeElement.textContent = `+${value}`
          clearInterval(increaseCount)
          return
        }
        item.nativeElement.textContent = `+${initialValue}`

      }, 1)
    }

    )
  }



}
