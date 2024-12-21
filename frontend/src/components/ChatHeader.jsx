import { X } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";
import { useChatStore } from "../store/useChatStore";
import { useState } from "react";

const ChatHeader = () => {
  const { selectedUser, setSelectedUser } = useChatStore();
  const { onlineUsers } = useAuthStore();
  const [fullScreenImage, setFullScreenImage] = useState(null);

  return (
    <div className="p-2.5 border-b border-base-300">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 group">
          {/* Avatar */}
          <div className="avatar">
            <div className="size-10 rounded-full relative cursor-pointer">
              <img
                src={selectedUser.profilePic || "/avatar.png"}
                alt={selectedUser.fullName}
                className="blur-sm group-hover:blur-none transition-all duration-300"
                onClick={() =>
                  setFullScreenImage(selectedUser.profilePic || "/avatar.png")
                }
              />
            </div>
          </div>

          {/* User info */}
          <div>
            <h3 className="font-medium blur-sm group-hover:blur-none transition-all duration-300">
              {selectedUser.fullName}
            </h3>
            <p className="text-sm text-base-content/70">
              {onlineUsers.includes(selectedUser._id) ? "Online" : "Offline"}
            </p>
          </div>
        </div>

        {/* Close button */}
        <button onClick={() => setSelectedUser(null)}>
          <X />
        </button>
      </div>

      {/* Full-Screen Profile Picture View */}
      {fullScreenImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          <img
            src={fullScreenImage}
            alt="Full Screen Profile"
            className="max-w-full max-h-full"
          />
          <button
            className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all"
            onClick={() => setFullScreenImage(null)}
          >
            ✖
          </button>
        </div>
      )}
    </div>
  );
};
export default ChatHeader;
