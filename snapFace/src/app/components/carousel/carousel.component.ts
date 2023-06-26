import { Component, Input, OnInit } from '@angular/core'
import { FaceSnap } from 'src/app/models/face-snap.model'

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  @Input() carousel!: FaceSnap

  carouselItems = [
    {
      imageUrl:
        'https://getwallpapers.com/wallpaper/full/7/4/f/1221245-beautiful-blue-jay-wallpaper-hd-1920x1200-for-retina.jpg',
    },
    {
      imageUrl:
        'https://getwallpapers.com/wallpaper/full/6/8/6/1221240-best-blue-jay-wallpaper-hd-2560x1600.jpg',
    },
  ]

  ngOnInit(): void {}
}
