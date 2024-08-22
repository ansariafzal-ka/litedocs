import { Trash2 } from "lucide-react";

interface DocumentCardProps {
  title: string;
  createdAt: string;
}

const DocumentCard = ({ title, createdAt }: DocumentCardProps) => {
  return (
    <div className="w-full p-5 glassmorphism flex justify-between items-center gap-5 rounded-md">
      <div>
        <h1 className="text-lg font-medium">{title}</h1>
        <p className="text-sm text-muted-foreground">{createdAt}</p>
      </div>
      <button>
        <Trash2 className="text-red-600" width={22} height={22} />
      </button>
    </div>
  );
};

export default DocumentCard;
