import type { StaticImageData } from "next/image";
import banner2024 from "../../public/images/aws_2024/banner.webp";
import photo2024a from "../../public/images/aws_2024/aws_2024_1.webp";
import photo2024b from "../../public/images/aws_2024/aws_2024_2.webp";
import photo2024c from "../../public/images/aws_2024/aws_2024_3.webp";
import banner2025 from "../../public/images/aws_2025/banner.webp";
import photo2025a from "../../public/images/aws_2025/aws_2025_1.webp";
import photo2025b from "../../public/images/aws_2025/aws_2025_2.webp";
import photo2025c from "../../public/images/aws_2025/aws_2025_3.webp";
import photo2025d from "../../public/images/aws_2025/aws_2025_4.webp";

export type TalkId = "aws-2025" | "aws-2024";

export type TalkMedia = {
  banner: StaticImageData;
  photos: StaticImageData[];
};

// Image files per talk. Texts and alt descriptions live in copy.ts, in the same order.
export const talkMedia: Record<TalkId, TalkMedia> = {
  "aws-2025": {
    banner: banner2025,
    photos: [photo2025c, photo2025a, photo2025b, photo2025d],
  },
  "aws-2024": {
    banner: banner2024,
    photos: [photo2024a, photo2024b, photo2024c],
  },
};
