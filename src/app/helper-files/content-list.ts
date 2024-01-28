// src/app/helper-files/content-list.ts
import { Content } from './content-interface';

export class ContentList {
  private contentArray: Content[];

  constructor() {
    this.contentArray = [];
  }

  // Getter function to return the Content array
  get content(): Content[] {
    return this.contentArray;
  }

  // Add function to add a Content item to the end of the array
  add(contentItem: Content): void {
    contentItem.imgURL = contentItem.imgURL ? `assets/images/${contentItem.imgURL}` : undefined;
    this.contentArray.push(contentItem);
  }

  // Function to return the number of items in the array
  getCount(): number {
    return this.contentArray.length;
  }

  // Function to generate reader-friendly HTML output of a Content item's properties at a given index
  getContentAtIndexHtml(index: number): string {
    const contentItem = this.contentArray[index];

    if (!contentItem) {
      return 'Index out of bounds';
    }

    const imgTag = contentItem.imgURL ? `<img src="${contentItem.imgURL}" alt="Image">` : '';

    return `
      <div>
        <h2>${contentItem.title}</h2>
        <p>${contentItem.description}</p>
        <p>Creator: ${contentItem.creator}</p>
        ${imgTag}
        <p>Type: ${contentItem.type || 'Not specified'}</p>
      </div>
    `;
  }
}
