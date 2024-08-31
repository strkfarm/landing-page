import { useQuery } from '@tanstack/react-query';
import React from 'react';

const endpoint = "https://indexer-graphql-api.onrender.com"

const REWARDS_QUERY = `
    query Query {
      totalHarvests
      totalStrkHarvested {
        STRKAmount
        USDValue
        rawSTRKAmount
      }
    }
`;

const Stats = () => {
    const { data, isLoading, error } = useQuery({
        queryKey: ["total-rewards-generated"],
        queryFn: async () => {
            return fetch(endpoint, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ query: REWARDS_QUERY })
            })
                .then((response) => {
                    if (response.status >= 400) {
                        console.error("Error fetching generated rewards");
                    } else {
                        return response.json();
                    }
                })
                .then((data) => data.data);
        }
    });

    const { data: tvlData } = useQuery({
        queryKey: ["tvl"],
        queryFn: async () => {
            return fetch('https://strkfarm.xyz/api/stats')
                .then((response) => {
                    if (response.status >= 400) {
                        console.error("Error fetching tvl");
                    } else {
                        return response.json();
                    }
                })
                .then((data) => data.data);
        }
    });

    console.log(tvlData)

    return (
        <div className="mt-32 flex flex-col gap-10 lg:flex-row justify-around rounded-2xl bg-opacity-80 bg-gradient-to-r from-[#2E2C5C] to-[#295446] py-8">
            <div className="flex flex-col items-center justify-center gap-3">
                <h4 className="text-white/90 text-lg">TVL</h4>
                <span className="font-bold text-[#61EDAA] text-5xl">
                    $419
                </span>
            </div>

            <div className="flex flex-col items-center justify-center gap-3">
                <h4 className="text-white/90 text-lg">
                    Total rewards generated
                </h4>

                {isLoading ? (
                    <div className='h-10 w-full animate-pulse bg-gradient-to-r from-[#36735e] to-[#295446] rounded-lg' />
                ) : (
                    <span className="font-bold text-[#61EDAA] text-5xl">
                        ${(data?.totalStrkHarvested?.USDValue / 1000).toFixed(1)}k
                    </span>
                )}

            </div>

            <div className="flex flex-col items-center justify-center gap-3">
                <h4 className="text-white/90 text-lg">
                    Supported pools
                </h4>
                <span className="font-bold text-[#61EDAA] text-5xl">
                    50+
                </span>
            </div>
        </div>
    )
}

export default Stats