import { useRouter, useSearchParams } from "next/navigation";

import Navbar from "@/design-system/Molecules/Navbar";
import EmptyCard from "./EmptyCard";
import { SuggestionCard } from "@/design-system/Molecules/SuggestionCard";
import usersData from "../../../config/data.json";
import { useState } from "react";

const Suggestions = () => {
  const router = useRouter();
  const suggestionData = usersData.productRequests;
  const [upvotes, setUpvotes] = useState(0);

  const upVoteHandler = (value: number) => {
    setUpvotes(value);

    const tempVote = value + 1;
    setUpvotes(tempVote);
  };

  return (
    <div className="suggestions">
      <Navbar
        suggestionCount={6}
        feedbackHandler={() => router.push(`/feedback/`)}
      />

      <div className="suggestion-card-container">
        {suggestionData.length ? (
          suggestionData.map((suggestion) => {
            return (
              <SuggestionCard
                upVoteHandler={upVoteHandler}
                key={suggestion.id}
                onClick={() => router.push(`/feedback/${suggestion.id}`)}
                likes={suggestion.upvotes}
                heading={suggestion?.title}
                tag={suggestion?.category}
                messagesCount={suggestion?.comments?.length ?? 0}
                description={suggestion?.description}
              />
            );
          })
        ) : (
          <EmptyCard />
        )}
      </div>
    </div>
  );
};

export default Suggestions;
