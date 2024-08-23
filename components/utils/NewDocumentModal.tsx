import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";

const NewDocumentModal = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <span className="btn btn_primary text-sm flex justify-center items-center gap-2">
          <Plus width={22} height={22} />
          <span className="hidden sm:block">Start a new Document</span>
        </span>
      </DialogTrigger>
      <DialogContent className="rounded-md">
        <DialogHeader>
          <DialogTitle>Start a new Document</DialogTitle>
          <DialogDescription>
            Kindly fill in the below fields to start a new document.
          </DialogDescription>
        </DialogHeader>
        <form className="w-full flex flex-col justify-center items-start gap-2">
          <label>Document title</label>
          <input type="text" className="input" required />
          <label>Description</label>
          <textarea className="input" required />
          <button type="submit" className="mt-3 btn btn_primary">
            create
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default NewDocumentModal;
