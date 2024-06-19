export default class TransacaoItem {
  private generateRandomString(length: number): string {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }
    return result;
  }
  private getRandomDate(start: Date, end: Date): Date {
    const startTime = start.getTime();
    const endTime = end.getTime();
    const randomTime = new Date(
      startTime + Math.random() * (endTime - startTime)
    );
    return randomTime;
  }

  private formatDate(dateString: string): string {
    const date = new Date(dateString);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  }

  private generateRandomThousand(): number {
    const min = 1000;
    const max = 9999;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  item() {
    const startDate = new Date(2020, 0, 1);
    const endDate = new Date(2023, 11, 31);
    const randomDate = this.getRandomDate(startDate, endDate);
    const date = this.formatDate(randomDate.toISOString());
    const generateRandomString = this.generateRandomString(10);
    const value = this.generateRandomThousand();

    return {
      descricao: generateRandomString,
      created_at: date,
      tipo: "Débito",
      valor: value,
      status: "Concluído",
    };
  }
}
