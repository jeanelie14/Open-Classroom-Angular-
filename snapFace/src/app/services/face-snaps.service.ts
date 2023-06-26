import { Injectable } from '@angular/core'
import { FaceSnap } from '../models/face-snap.model'

@Injectable({
  providedIn: 'root',
})
export class FaceSnapsService {
  //Creation d'un tableau de fceSnaps
  faceSnaps: FaceSnap[] = [
    {
      id: 1,
      title: 'American Robin',
      description:
        'Widespread, common, and conspicuous, these medium-size birds can be found in every state in the Lower 48, every Canadian province, and Alaska',
      createDate: new Date(),
      snaps: 0,
      imageUrl:
        'https://media.audubon.org/aud_gbbc-2016_american-robin_32533_kk_ca_photo-donald_metzner.jpg?width=975&auto=webp&quality=90&fit=bounds&disable=upscale',
      audio: '../assets/Audios/amerob.mp3',
      autor: ' Donald Metzner/Great Backyard Bird Count',
    },
    {
      id: 2,
      title: 'Northern Cardinal ',
      description:
        'The Northern Cardinal is the most popular state bird (seven) and the mascot for a whole bunch of sports teams. However, despite what the University of Louisville might think, cardinals most definitely do not have teeth',
      createDate: new Date(),
      snaps: 0,
      imageUrl:
        'https://media.audubon.org/web_northern_cardinal_7_kk_michele_black.jpg?width=975&auto=webp&quality=90&fit=bounds&disable=upscale',
      location: 'paris',
      audio: '../assets/Audios/norcar_7.mp3',
      autor: 'Michele Black/Audubon Photography Awards',
    },
    {
      id: 3,
      title: 'Blue Jay',
      description:
        'The vibrant feathers of a Blue Jay are magnificent, no doubt, but even more impressive are the microscopic keratin particles throughout each feather that scatter light, producing  the cooler colors seen on these and other birds.  ',
      createDate: new Date(),
      snaps: 0,
      imageUrl:
        'https://media.audubon.org/web_apa_2013_28342_232388_briankushner_blue_jay_kk_0.jpg?width=975&auto=webp&quality=90&fit=bounds&disable=upscale',
      audio: '../assets/Audios/blujay_1.mp3',
      autor: 'Brian Kushner/Audubon Photography Awards',
    },
    {
      id: 4,
      title: 'Steller jay',
      description:
        ' Steller Jays can vary widely in both body and head color, ranging from extremely dark populations to paler birds with white marks on their heads. In total, 16 subspecies have been described across North America. ',
      createDate: new Date(),
      snaps: 0,
      imageUrl:
        'https://media.audubon.org/apa_2016_stellers-jay_markus_hoeckner_kk.jpg?width=975&auto=webp&quality=90&fit=bounds&disable=upscale',
      audio: '../assets/Audios/stejay_1.mp3',
      autor: ' Markus Hoeckner/Audubon Photography Awards',
    },
    {
      id: 5,
      title: 'Mourning Dove',
      description:
        'Here’s a new term for ya: pigeon milk. Secreted from the crops of doves and pigeons (part of their digestive system), this chunky, yellow substance is highly nutritious and fed to baby birds after being regurgitated by the parent',
      createDate: new Date(),
      snaps: 0,
      imageUrl:
        'https://media.audubon.org/web_apa_2016-a1_1227_5_mourning-dove_kat_bradley-bennett_kk.jpg?width=975&auto=webp&quality=90&fit=bounds&disable=upscale',
      location: 'paris',
      audio: '../assets/Audios/moudov_1.mp3',
      autor: ' Kat Bradley Bennett/Audubon Photography Awards',
    },
    {
      id: 6,
      title: 'American Crow',
      description:
        'Aesop knew what he was talking about. Crows and ravens, which belong to the gifted corvid family, are incredibly smart and curious, with the ability to use tools and problem solve.  ',
      createDate: new Date(),
      snaps: 0,
      imageUrl:
        'https://media.audubon.org/web_american-crow_brian-kushner.jpg?width=975&auto=webp&quality=90&fit=bounds&disable=upscale',
      audio: '../assets/Audios/amecro_1.mp3',
      autor: 'Brian Kushner/Audubon Photography Awards',
    },
    {
      id: 7,
      title: 'European Starling',
      description:
        'The European Starling was famously introduced in 1890 by Eugene Schieffelin, who, according to legend, thought that America should have every bird mentioned in Shakespeare’s plays. So he released two waves of the birds in Central Park, and now they ve taken over the entire U.S. Thanks, Eugene.',
      createDate: new Date(),
      snaps: 0,
      imageUrl:
        'https://media.audubon.org/web_apa_2012_24630_191530_rollandswain_european_starling_kk_1.jpg?width=975&auto=webp&quality=90&fit=bounds&disable=upscale',
      audio: '../assets/Audios/eursta_2.mp3',
      autor: ' Rolland Swain/Audubon Photography Awards',
    },
    {
      id: 8,
      title: 'Northern Mockingbird ',
      description:
        'In addition to other species songs, Northern Mockingbirds have been known to imitate machinery, perform near-perfect versions of human sounds like music and car alarms, and can even mimic frogs and toads',
      createDate: new Date(),
      snaps: 0,
      imageUrl:
        'https://media.audubon.org/aud_gbbc-2017_northern-mockingbird_44734_kk_photo-john-pizniur.jpg?width=975&auto=webp&quality=90&fit=bounds&disable=upscale',
      audio: '../assets/Audios/normoc_.mp3',
      autor: ' John Pizniur/Great Backyard Bird Count',
      location: 'paris',
    },
    {
      id: 9,
      title: 'Black-billed Magpie',
      description:
        'Black-billed Magpies construct massive round nests that can reach up to three feet in diameter and look like large bushel baskets. On each side they create entry and exit holes.  ',
      createDate: new Date(),
      snaps: 0,
      imageUrl:
        'https://media.audubon.org/black-billed-magpie_becky-matsubara_flickr-cc-by-2.0.jpg?width=975&auto=webp&quality=90&fit=bounds&disable=upscale',
      audio: '../assets/Audios/blbima_1.mp3',
      autor: ' Becky Matsubara/Flickr (CC-BY-2.0)',
    },
  ]

  //Retourne tous les FaceSnaps
  getAlleFaceSnaps() {
    return this.faceSnaps
  }

  getFaceSnapsById(faceSnapId: number): FaceSnap {
    const faceSnap = this.faceSnaps.find(
      (faceSnap) => faceSnap.id === faceSnapId,
    )
    if (!faceSnap) {
      throw new Error('FaceSnap nexiste pas ')
    } else {
      return faceSnap
    }
  }

  snapEtOnSnapFaceSnapsById(faceSnapId: number, snapType: 'snap' | 'unsnap') {
    const faceSnap = this.getFaceSnapsById(faceSnapId)
    snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--
  }
}

// unSnapFaceSnapsById(id: number) {
//   const faceSnap = this.faceSnaps.find((faceSnap) => faceSnap.id === id)
//   if (faceSnap) {
//     faceSnap.snaps--
//   } else {
//     throw new Error('Could not found')
//   }
// }
