import { Component, ViewChild, TemplateRef } from '@angular/core';
import { createEditor, Element } from 'slate';
import { withHistory } from 'slate-history';
import { withAngular } from 'slate-angular';
import { DemoTextMarkComponent, MarkTypes } from './text-mark.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  	title = 'slate-angular-basic';
    value = initialValue;

    @ViewChild('heading_1', { read: TemplateRef, static: true })
    headingOneTemplate!: TemplateRef<any>;

    @ViewChild('heading_2', { read: TemplateRef, static: true })
    headingTwoTemplate!: TemplateRef<any>;

    @ViewChild('heading_3', { read: TemplateRef, static: true })
    headingThreeTemplate!: TemplateRef<any>;

    @ViewChild('blockquote', { read: TemplateRef, static: true })
    blockquoteTemplate!: TemplateRef<any>;

    @ViewChild('ul', { read: TemplateRef, static: true })
    ulTemplate!: TemplateRef<any>;

    @ViewChild('ol', { read: TemplateRef, static: true })
    olTemplate!: TemplateRef<any>;

    @ViewChild('li', { read: TemplateRef, static: true })
    liTemplate!: TemplateRef<any>;

    editor = withHistory(withAngular(createEditor()));

    ngOnInit(): void {
    }

    valueChange(value: Element[]) {
    }

    renderElement = (element: any) => {
        if (element.type === 'heading-one') {
            return this.headingOneTemplate;
        }
        if (element.type === 'heading-two') {
            return this.headingTwoTemplate;
        }
        if (element.type === 'heading-three') {
            return this.headingThreeTemplate;
        }
        if (element.type === 'block-quote') {
            return this.blockquoteTemplate;
        }
        if (element.type === 'numbered-list') {
            return this.olTemplate;
        }
        if (element.type === 'bulleted-list') {
            return this.ulTemplate;
        }
        if (element.type === 'list-item') {
            return this.liTemplate;
        }
        return null;
    }
    
    renderText = (text: any) => {
        if (text[MarkTypes.bold] || text[MarkTypes.italic] || text[MarkTypes.code] || text[MarkTypes.underline]) {
            return DemoTextMarkComponent;
        }
      	return null;
    }
}

const initialValue = [
    {
        type: 'paragraph',
        children: [
            { text: 'This is editable ' },
            { text: 'rich', bold: true },
            { text: ' text, ' },
            { text: 'much', bold: true, italic: true },
            { text: ' better than a ' },
            { text: '<textarea>', 'code-line': true },
            { text: '!' }
        ]
    },
    {
        type: 'heading-one',
        children: [{ text: 'This is h1 ' }]
    },
    {
        type: 'heading-three',
        children: [{ text: 'This is h3 ' }]
    },
    {
        type: 'paragraph',
        children: [
            {
                text: `Since it's rich text, you can do things like turn a selection of text `
            },
            { text: 'bold', bold: true },
            {
                text: ', or add a semantically rendered block quote in the middle of the page, like this:'
            }
        ]
    },
    {
        type: 'block-quote',
        children: [{ text: 'A wise quote.' }]
    },
    {
        type: 'paragraph',
        children: [{ text: 'Try it out for yourself!' }]
    },
    {
        type: 'paragraph',
        children: [{ text: '' }]
    }
];
