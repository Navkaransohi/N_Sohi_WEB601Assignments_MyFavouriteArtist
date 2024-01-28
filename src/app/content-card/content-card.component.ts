import { Component, OnInit } from '@angular/core';
import { ContentList } from '../helper-files/content-list';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-card',
  standalone: true,
  imports: [],
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.scss'
})
export class ContentCardComponent implements OnInit {
  contentList = new ContentList();

  constructor() {
    // Add at least 3 valid items to the ContentList
    const item1: Content = { id: 1, title: 'About', description: 'Arjan Dhillon is my favourite artist', creator: 'Creator 1', imgURL:'assents/arjan.jpg' };
    const item2: Content = { id: 2, title: 'Albums', description: 'Description 2', creator: 'Creator 2' };
    const item3: Content = { id: 3, title: 'Shows', description: 'Description 3', creator: 'Creator 3' };

    this.contentList.add(item1);
    this.contentList.add(item2);
    this.contentList.add(item3);
  }

  ngOnInit(): void {
  }
}
