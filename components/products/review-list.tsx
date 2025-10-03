import React from "react";
import Stars from "../stars";
import {
  descendingSortByKey,
  calcDaysSince,
  ascendingSortByKey,
} from "@/lib/utils";
import { CircleCheck } from "lucide-react";
import SortOptions from "./sort-options";
import { reviewSortList } from "@/lib/constants";
import { Review } from "@/lib/zod-schemas";

export default function ReviewList({
  reviews,
  sort,
}: {
  reviews: Review[];
  sort?: string;
}) {
  let sortedReviews: Review[];

  if (sort) {
    sortedReviews =
      sort === "rating-asc"
        ? ascendingSortByKey(reviews, "rating")
        : descendingSortByKey(reviews, "rating");
  } else {
    sortedReviews = descendingSortByKey(reviews, "rating");
  }

  return (
    <div className="grid gap-8 px-8">
      <div className="flex justify-end">
        <SortOptions data={reviewSortList}></SortOptions>
      </div>
      <div className="w-full overflow-auto">
        <div className="grid gap-8">
          {sortedReviews.map((review, index) => (
            <div key={index} className="grid grid-cols-4 border-b-1 pb-16">
              <div className="grid h-min gap-2 ">
                <p className="font-bold">{review.reviewerName}</p>
                <div className="flex gap-1">
                  <CircleCheck stroke="white" fill="black"></CircleCheck>
                  <p className="flex gap-2">Verified</p>
                </div>
              </div>
              <div className="grid grid-rows-2 col-start-2 col-span-3 gap-8">
                <div className="flex justify-between ">
                  <Stars starCn="size-8" scoreOutOfFive={review.rating}></Stars>
                  <p>{`${calcDaysSince(review.date)} days ago`}</p>
                </div>
                <p className="font-semibold">{review.comment}</p>
                <p className="max-w-192">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                  accusantium consequatur temporibus sunt consectetur
                  perferendis magnam vero ut, deleniti ipsa ipsam, vitae labore
                  molestias aut nemo numquam exercitationem enim quae!
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
