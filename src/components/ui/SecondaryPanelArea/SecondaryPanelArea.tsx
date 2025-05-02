import { Suspense } from "react";
import { SecondaryPanelContent } from "./SecondaryPanelContent";
import { ContentFallback } from "./ContentFallback";

const SecondaryPanelArea = async () => {
  return (
    <div className="bg-gray-700 rounded-3xl">
      <h2 className="text-xl p-6">{"What's happening"}</h2>
      <div className="flex flex-col p-6 pt-0 gap-4">
        <Suspense fallback={<ContentFallback />}>
          <SecondaryPanelContent />
        </Suspense>
      </div>
    </div>
  );
};

export { SecondaryPanelArea };
