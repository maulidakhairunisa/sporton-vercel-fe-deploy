import { useState } from "react";
import Modal from "../ui/modal";
import Button from "@/app/(landing)/components/ui/button";

type TBankInfoModalProps = {
    isOpen: boolean;
    onClose: () => void;
}

const BankInfoModal = ({ isOpen, onClose }: TBankInfoModalProps) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Add Bank Account">
            <div className="flex flex-col gap-6" >
                    <div className="flex flex-col gap-4 w-full">
                        <div className="input-group-admin">
                            <label htmlFor="BankInfoName">Bank Name</label>
                            <input type="text"
                                id="BankName"
                                name="BankName"
                                placeholder="e. g. Mandiri, BCA, BRI" />
                        </div>
                        <div className="input-group-admin">
                            <label htmlFor="BankInfoAccount">Account Number</label>
                            <input type="text"
                                id="AccountNumber"
                                name="AccountNumber"
                                placeholder="12345" />
                        </div>
                        <div className="input-group-admin">
                            <label htmlFor="BankInfoName">Account Holder</label>
                            <input type="text"
                                id="AccountHolder"
                                name="AccountHolder"
                                placeholder="Holder Name as registered on the account" />
                        </div>
                </div>
            <Button className="ml-auto mt-3 rounded-lg">Add Bank Account</Button>
        </div>
        </Modal >
    );
};

export default BankInfoModal;