import { Component, OnInit, Input } from '@angular/core'
import { FaceSnap } from '../models/face-snap.model'
import { FaceSnapsService } from '../services/face-snaps.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss'],
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap

  buttonText!: string

  constructor(
    private faceSnapService: FaceSnapsService,
    private router: Router,
  ) {
    this.buttonText = 'Oh Snap!'
  }

  ngOnInit() {}

  onSnap() {
    if (this.buttonText === 'Oh Snap!') {
      this.faceSnapService.snapEtOnSnapFaceSnapsById(this.faceSnap.id, 'snap')
      this.buttonText = 'Oops, unSnap!'
    } else {
      this.faceSnapService.snapEtOnSnapFaceSnapsById(this.faceSnap.id, 'unsnap')
      this.buttonText = 'Oh Snap!'
    }
  }
  onViewFaceSnap() {
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`)
  }
}
