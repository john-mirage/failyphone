export default function InfoBar() {
    return (
        <div className="absolute top-0 left-0 flex flex-row items-center px-3 w-full h-8 bg-[rgba(23,23,23,0.65)]">
            <h2 className="text-normal text-neutral-50 font-medium">
                Life
                <span className="font-light">Invader</span>
            </h2>
            <svg className="w-6 h-auto ml-auto mb-2" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                <path className="fill-neutral-50" d="M16 8c.552 0 1 .446 1 .995v10.01c0 .55-.448.995-1 .995s-1-.446-1-.995V8.995c0-.55.448-.995 1-.995Zm-4 3a1 1 0 0 1 1 1v7a1 1 0 1 1-2 0v-7a1 1 0 0 1 1-1Zm-4 3c.552 0 1 .445 1 .994v4.012c0 .549-.448.994-1 .994s-1-.445-1-.994v-4.012A.997.997 0 0 1 8 14Zm-4 3c.552 0 1 .44 1 .984v1.032A.992.992 0 0 1 4 20c-.552 0-1-.44-1-.984v-1.032A.992.992 0 0 1 4 17Z"/>
            </svg>
            <span className="text-normal text-neutral-50 font-normal ml-1">08:32</span>
        </div>
    );
}