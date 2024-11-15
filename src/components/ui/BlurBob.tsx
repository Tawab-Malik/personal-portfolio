import { cn } from "@/lib/utils";
interface BlobProps extends React.HTMLAttributes<HTMLDivElement> {
    firstBlobColor: string;
    secondBlobColor: string;
}

export default function BlurryBlob({
                                       className,
                                       firstBlobColor,
                                       secondBlobColor,
                                   }: BlobProps) {
    return (
        <div className="min-h-52 max-w-7xl mx-auto min-w-52 items-center absolute top-0 left-[100px] justify-center">
            <div className="relative w-full max-w-lg">
                <div
                    className={cn(
                        "absolute -right-[45rem]  h-[38rem] w-[38rem]  animate-bob-1 bg-java dark:bg-new-yellow dark:mix-blend-difference rounded-full  p-8 opacity-45 mix-blend-multiply blur-3xl filter",

                    )}
                ></div>
                <div
                    className={cn(
                        "absolute -left-[2rem] top-10  h-[38rem] w-[38rem] animate-bob-2 bg-[#995FB6] dark:bg-new-yellow rounded-full  p-8 opacity-45 mix-blend-multiply dark:mix-blend-difference blur-3xl filter",

                    )}
                ></div>
            </div>
        </div>
    );
}
