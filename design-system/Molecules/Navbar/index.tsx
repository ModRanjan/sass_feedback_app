import ArrowDownIcon from "@/design-system/Atom/Icons/ArrowDownIcon";
import PlusIcon from "@/design-system/Atom/Icons/PlusIcon";
import { SuggestionIcon } from "@/design-system/Atom/Icons/SuggestionIcon";

type NavbarType = {
  suggestionCount: number;
  feedbackHandler: () => void;
  handleLogout: () => void;
  handleLogin: () => void;
  isLoggedIn: boolean;
};

const Navbar = ({
  isLoggedIn,
  suggestionCount,
  feedbackHandler,
  handleLogin,
  handleLogout,
}: NavbarType) => {
  return (
    <div className="navbar">
      <div className="nav-left">
        <SuggestionIcon />

        <h3 className="suggestion-count">{suggestionCount} Suggestions</h3>
        <button
          className="btn dropdown-btn"
          onClick={() => console.log("object")}
        >
          <p>Sort by :</p>
          Most Upvotes
          <ArrowDownIcon color="#fff" />
        </button>
      </div>

      {isLoggedIn ? (
        <div style={{ display: "flex", gap: "5px" }}>
          <button
            onClick={feedbackHandler}
            className="btn btn--primary nav-btn"
          >
            <PlusIcon width={10} height={10} color="#F2F4FE" />
            <span>Add Feedback</span>
          </button>

          <button className="btn btn--primary nav-btn" onClick={handleLogout}>
            Log Out
          </button>
        </div>
      ) : (
        <button className="btn btn--primary nav-btn" onClick={handleLogin}>
          Log in
        </button>
      )}
    </div>
  );
};

export default Navbar;
