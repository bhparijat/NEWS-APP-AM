import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-demo',
    template: 'hello'
})

export class DemoComponent implements OnInit {
    constructor() { }

    ngOnInit() { 
        console.log('hello');
    }
}