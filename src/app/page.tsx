import Image from "next/image";

function getCurrentDate() {
	const date = new Date();
	const month = String(date.getMonth() + 1).padStart(2, "0");
	const day = String(date.getDate()).padStart(2, "0");
	const year = date.getFullYear();

	return `${month}.${day}.${year}`;
}

export default function Home() {
	const location = "San Francisco, CA";
	const date = getCurrentDate();
	const temperature = "72";
	const conditions = "Sunny";
	const fiveDayForecast = [
		{
			day: "Today",
			temperature: "72",
			conditions: "Sunny",
		},
		{
			day: "Wed",
			temperature: "56",
			conditions: "Cloudy",
		},
		{
			day: "Thu",
			temperature: "40",
			conditions: "Misty",
		},
		{
			day: "Fri",
			temperature: "70",
			conditions: "Sunny",
		},
		{
			day: "Sat",
			temperature: "40",
			conditions: "Rainy",
		},
		{
			day: "Sun",
			temperature: "90",
			conditions: "Scorching",
		},
	];

	return (
		// main app
		<div className="text-[var(--appTextColor)] text-xl rounded-4xl w-7/9 h-2/3 flex flex-row overflow-hidden">
			{/* left side */}
			<div className="w-2/3 h-full bg-[var(--appBackgroundMain)] flex flex-col">
				{/* top bar */}
				<div className="h-12 text-black text-lg px-22 py-10 flex items-center justify-between">
					<span className="ml-left font-semibold">{location}</span>
					<span className="ml-right font-semibold">{date}</span>
				</div>
				{/* content */}
				<div className="flex-grow flex flex-col items-center justify-center">
					{/* Temperature */}
					<p className="text-[10rem] font-bold relative mb-4">
						{temperature}
						<span className="absolute bottom-5 text-[10rem]">
							°
						</span>
					</p>
					{/* Subtitle */}
					<h2 className="text-4xl font-medium -mt-5">{conditions}</h2>
				</div>
				{/* Forecast Cards */}
				<div className="mb-10 mx-35 flex flex-row gap-4 items-center justify-evenly">
					{fiveDayForecast.map((element, index) => (
						<div
							key={index}
							className={`bg-[var(--appBackgroundMain)] h-35 rounded-xl w-1/6 flex flex-col justify-evenly items-center ${
								element.day === "Today"
									? "outline outline-2 outline-gray-200"
									: ""
							}`}
						>
							<p className="text-[0.8rem] mt-6 text-gray-600 font-medium flex-grow">
								{element.day}
							</p>
							<p className="text-2xl text-gray-600 font-semibold flex-grow">
								{element.temperature}
								<span className="absolute text-2xl">°</span>
							</p>
							<p className="text-[0.8rem] text-gray-400 font-medium flex-grow">
								{element.conditions}
							</p>
						</div>
					))}
				</div>
			</div>
			{/* right side */}
			<div className="w-1/3 h-full bg-[var(--appBackgroundSide)] flex items-center justify-center">
				Right
			</div>
		</div>
	);
}
