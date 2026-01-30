"use client";

import { FiPlus } from "react-icons/fi";
import Button from "@/app/(landing)/components/ui/button";
import TransactionTable from "../../components/transactions/transaction-table";
import TransactionsModal from "../../components/transactions/transaction-modal";
import { useState } from "react";

const TransactionManagement = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleCloseModal= ()=>{
        setIsOpen(false)
    }

    const handleViewDetails = () =>{
        setIsOpen(true);
    }
    return (
        <div>
            <div className="flex inset-0 x-50 justify-between items-center mb-10">
                <div>
                    <h1 className="font-bold text-2xl">Transaction Management</h1>
                    <p className="opacity-50">Verify incoming payment and manage orders.</p>
                </div>
            </div>
            <TransactionTable onViewDetails={handleViewDetails}/>
            <TransactionsModal isOpen={isOpen} onClose={handleCloseModal}/>
        </div>
    );
};
export default TransactionManagement;

