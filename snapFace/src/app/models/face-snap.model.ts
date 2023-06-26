export class FaceSnap {
  id: number
  title?: string
  description?: string
  imageUrl?: string
  createDate?: Date
  snaps: number
  location?: string
  audio?: any
  autor?: string

  // buttonText: string;
  constructor(
    id: number,
    title: string,
    description: string,
    createDate: Date,
    snaps: number,
    imageUrl: string,
    audio: any,
    autor: string,
  ) {
    this.id = id
    this.title = title
    this.description = description
    this.imageUrl = imageUrl
    this.createDate = createDate
    this.snaps = snaps
    this.audio = audio
    this.autor = autor
  }
}
