interface Payment {
    value: number;
    note?: string;
    payDate: Date;
    category?: PaymentCategory;
}
