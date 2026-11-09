import { Component } from '@angular/core';
@Component({
selector: 'app-documentacion-screen',
imports: [],
templateUrl: './documentacion-screen.html',
styleUrl: './documentacion-screen.scss'
})
export class DocumentacionScreen {
urlDocumentacion = 'https://angular.dev';
diapositivas = [
{ titulo: 'Node.js', imagen: 'assets/img/Nodejs.svg' },
{ titulo: 'TypeScript', imagen: 'assets/img/typescript.svg' },
{ titulo: 'Angular', imagen: 'assets/img/Angular.svg' },
{ titulo: 'NPM', imagen: 'assets/img/NPM.svg' }
];
}
