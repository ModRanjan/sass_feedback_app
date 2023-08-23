"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Badge } from "@/design-system/Atom/Badge";

import ArrowLeftIcon from "@/design-system/Atom/Icons/ArrowLeftIcon";
import CommentsCard from "@/design-system/Atom/CommentsCard";

import { SuggestionCard } from "@/design-system/Molecules/SuggestionCard";
import data from "@/config/data.json";
import { Data, ProductRequest } from "@/types/DataTypes";

const View = ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  const router = useRouter();

  const id = typeof params.slug === "string" ? parseInt(params.slug) : 1;
  const [toggleReply, setToggleReply] = useState(false);
  const [userData, setUserData] = useState<ProductRequest>();

  useEffect(() => {
    const Data: Data = data;
    if (Data.productRequests && id) {
      setUserData(Data.productRequests[id]);
    }
  }, [id]);
  const upVoteHandler = (value: number) => {
    

    const tempVote = value + 1;
    
  };


  return (
    <>
      <div className="feedback-header">
        <button className="btn back-btn" onClick={() => router.push("/")}>
          <span className="-ml-4">
            <ArrowLeftIcon width={10} height={10} color="#4661E6" />
          </span>

          <span className="text-grey">Go back</span>
        </button>

        <button
          className="btn btn--primary"
          onClick={() => router.push(`/feedback/${"3"}/edit`)}
        >
          Edit Feedback
        </button>
      </div>
      {userData && (
        <SuggestionCard
        upVoteHandler={upVoteHandler}
          likes={userData.upvotes}
          heading={userData.title}
          tag={"feature"}
          messagesCount={userData?.comments?.length ?? 0}
          description={userData?.description}
        />
      )}
      <div className="comments-container">
        <h2>{userData?.comments?.length ?? 0} Comments</h2>

        {userData?.comments?.map((data, index) => {
          return (
            <>
              <CommentsCard
                key={index}
                avtarURL={data?.user?.image}
                name={data?.user?.name}
                profile={data?.user?.username}
                comment={data?.content}
                replyHenader={() => {
                  setToggleReply((prev) => !prev);
                }}
                reply={toggleReply}
              />
              <span className="saperator" />
            </>
          );
        })}
      </div>
      <div className="comments-footer-container">
        <h3>Add Comment</h3>

        <textarea
          className="textarea"
          placeholder="Type your comment here"
          rows={4}
        />

        <div className="comment-footer">
          <p className="body-2">255 charector left</p>
          <button className="btn btn--primary">Post Comment</button>
        </div>
      </div>
    </>
  );
};

export default View;
