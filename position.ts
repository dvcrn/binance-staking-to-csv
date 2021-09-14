interface Position {
    positionId: string;
    projectId: string;
    asset: string;
    userId: string;
    duration: string;
    amount: string;
    amountBTC?: string;
    interest: string;
    interestBTC?: string;
    unpayInterest: string;
    interestType: string;

    extraInterestAsset?: string;
    extraInterestAmount?: string;
    gross?: string;
    latePayInterst?: string;

    purchaseTime: string;
    nextInterestPayDate: string;
    nextInterestPay: string;
    payInterstPeriod: string;
    accrualDays: string;
    redeemDate: string;
    endTime?: string;
    interestRate?: string;
    extraInterestRate?: string;
    canTransfer: boolean;
    canRedeemEarly: boolean;
    redeemAmountEarly?: string;
    redeemPeriod: string;
    status: string;
    createTimestamp: string;
    deliverDate: string;
}

export default Position;
