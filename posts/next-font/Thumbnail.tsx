import Image from "next/image"

import thumbnail from "./thumbnail.jpg"

export default function Thumbnail() {
  return <Image src={thumbnail} alt="thumbnail" fill />
}
