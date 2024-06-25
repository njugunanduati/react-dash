import Chart from "./Chart"

const Dashboard = () => {
    return (
        <div className="flex flex-col space-y-6 px-12 py-14">
            <h2>Dashboard</h2>
            <div className="flex space-x-8">
                <div className="w-2/5 h-[150px] border rounded flex flex-col justify-center p-4 mt-5 text-grey-600">
                    <span className="font-bold text-2xl">James Njuguna</span>
                    <span className="text-sm">Your Balance: Ksh 20000</span>
                </div>
                <div className="w-2/5 h-[150px] border rounded flex flex-col justify-center p-4 mt-5 text-grey-600">
                    <span className="font-bold text-2xl">James Njuguna</span>
                    <span className="text-sm">Your Expences: Ksh 20000</span>
                </div>
            </div>
            <div className="w-4/5 flex flex-col">
                <h2>Expenses Chart</h2>
                <Chart />
            </div>
        </div>
    )
}
export default Dashboard