import Wrapper from "../components/wrapper";
import scheduleData from "./scheduleData.json";

export default function Schedule(){
    return(
        <Wrapper>
            <div className="min-h-screen bg-[#0a0a0a] px-8 py-16">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-center text-[#efdb92] text-6xl font-bold mb-20 tracking-tight font-cormorant">
                        Event Schedule
                    </h1>

                    {scheduleData.fests.map((fest, festIndex) => (
                        <section key={festIndex} className="mb-20">
                            <h2 className="text-[#efdb92] text-4xl font-semibold mb-10 font-cormorant text-start">{fest.name}</h2>
                            <div className="overflow-x-auto rounded-2xl border border-[rgba(239,219,146,0.2)] bg-[rgba(239,219,146,0.02)]">
                                <table className="w-full border-collapse">
                                    <thead>
                                        <tr className="bg-[rgba(239,219,146,0.1)] backdrop-blur-sm">
                                            <th className="text-left text-[#efdb92] py-5 px-6 font-semibold text-lg border-b-2 border-[rgba(239,219,146,0.3)] font-jetbrains-mono">Event Name</th>
                                            <th className="text-left text-[#efdb92] py-5 px-6 font-semibold text-lg border-b-2 border-[rgba(239,219,146,0.3)] font-jetbrains-mono">Date</th>
                                            <th className="text-left text-[#efdb92] py-5 px-6 font-semibold text-lg border-b-2 border-[rgba(239,219,146,0.3)] font-jetbrains-mono">Registration Fee</th>
                                            <th className="text-left text-[#efdb92] py-5 px-6 font-semibold text-lg border-b-2 border-[rgba(239,219,146,0.3)] font-jetbrains-mono">Cash Prize</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-gray-300">
                                        {fest.events.map((event, eventIndex) => (
                                            <tr key={eventIndex} className="border-b border-[rgba(255,255,255,0.05)] hover:bg-[rgba(239,219,146,0.08)] transition-all duration-200 group">
                                                <td className="py-5 px-6 font-medium text-gray-200 group-hover:text-[#efdb92] transition-colors">{event.name}</td>
                                                <td className="py-5 px-6 text-gray-400 font-jetbrains-mono text-sm">{event.date}</td>
                                                <td className="py-5 px-6 text-gray-300">{event.registrationFee}</td>
                                                <td className="py-5 px-6 text-[#efdb92] font-semibold">{event.cashPrize}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </section>
                    ))}
                </div>
            </div>
        </Wrapper>
        
    )
}