import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { FaceSnap } from 'src/app/models/face-snap.model'
import { FaceSnapsService } from 'src/app/services/face-snaps.service'

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss'],
})
export class SingleFaceSnapComponent implements OnInit {
  faceSnap!: FaceSnap

  buttonText!: string

  constructor(
    private faceSnapService: FaceSnapsService,
    private router: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.buttonText = 'Oh Snap!'
    const faceSnapId = +this.router.snapshot.params['id']
    this.faceSnap = this.faceSnapService.getFaceSnapsById(faceSnapId)
  }

  onSnap() {
    if (this.buttonText === 'Oh Snap!') {
      this.faceSnapService.snapEtOnSnapFaceSnapsById(this.faceSnap.id, 'snap')
      this.buttonText = 'Oops, unSnap!'
    } else {
      this.faceSnapService.snapEtOnSnapFaceSnapsById(this.faceSnap.id, 'unsnap')
      this.buttonText = 'Oh Snap!'
    }
  }
}
