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

  addComment(carNumber: string, location: string, text: string, positive: boolean): void {
    let comments: Comment[] | undefined = this.comments.get(carNumber);
    if (!comments) {
      comments = [];
    }
    comments.push(
      {
        id: Math.random(),
        timestamp: new Date(),
        text: text,
        location: location,
        positive: positive
      }
    );
    this.comments.set(
      carNumber,
      comments
    );
  }

  getComments(carNumber: string): Observable<Comment[]> {
    return of(this.comments.get(carNumber) || []);
  }

  private setComments() {
    this.comments.set(
      "ADF740",
      [
        {
          id: 1,
          text: "Omg tavo mašina tokia graži uwu",
          location: "54.7228671 25.2127333",
          timestamp: new Date('2023-10-07T09:10:00'),
          positive: true
        },
        {
          id: 3,
          text: "Pas tave nežybsi avarinės lempos",
          location: "Šeškinės Lidl",
          timestamp: new Date('2023-10-06T09:10:00'),
          positive: false
        },
        {
          id: 4,
          text: "Pas tave nežybsi avarinės lempos",
          location: "55.7228671 25.2127333",
          timestamp: new Date('2023-10-06T09:10:00'),
          positive: false
        }

      ]
    )
    this.comments.set(
      "BBD420",
      [
        {
          id: 2,
          text: "Seneliumbai, vos manęs nenuskynei per perėja, išmok vairuoti",
          location: "54.7228671 25.2127333",
          timestamp: new Date('2023-10-07T09:10:30'),
          positive: false
        },
        {
          id: 5,
          text: "Seni kieti ratai pas tave wow",
          location: "54.7228671 25.2127333",
          timestamp: new Date('2023-10-07T09:10:30'),
          positive: true
        },
        {
          id: 6,
          text: "Nice išmetimo vamzdis",
          location: "54.7228671 25.2127333",
          timestamp: new Date('2023-10-07T09:10:30'),
          positive: true
        }
      ]
    )
  }
}
