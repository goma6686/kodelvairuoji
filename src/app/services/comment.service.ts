import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {Comment} from "../models/comment";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private comments: Map<string, Comment[]> = new Map();

  constructor() {
    this.setComments();
  }

  addComment(carNumber: string, text: string): void {
    let comments: Comment[] | undefined = this.comments.get(carNumber);
    if (!comments) {
      comments = [];
    }
    comments.push(
      {
        id: Math.random(),
        timestamp: new Date(),
        text: text
      }
    );
    this.comments.set(
      carNumber,
      comments
    );
  }

  getComments(carNumber: string): Observable<Comment[] | undefined> {
    return of(this.comments.get(carNumber));
  }

  private setComments() {
    this.comments.set(
      "ADF740",
      [
        {
          id: 1,
          text: "Omg tavo mašina tokia graži uwu",
          timestamp: new Date('2023-10-07T09:10:00')
        },
        {
          id: 3,
          text: "Pas tave nežybsi avarinės lempos",
          timestamp: new Date('2023-10-06T09:10:00')
        },
        {
          id: 4,
          text: "Pas tave nežybsi avarinės lempos",
          timestamp: new Date('2023-10-06T09:10:00')
        }

      ]
    )
    this.comments.set(
      "BBD420",
      [
        {
          id: 2,
          text: "Seneliumbai, vos manęs nenuskynei per perėja, išmok vairuoti",
          timestamp: new Date('2023-10-07T09:10:30')
        },
        {
          id: 5,
          text: "Seni kieti ratai pas tave wow",
          timestamp: new Date('2023-10-07T09:10:30')
        },
        {
          id: 6,
          text: "Nice išmetimo vamzdis",
          timestamp: new Date('2023-10-07T09:10:30')
        }
      ]
    )
  }
}
