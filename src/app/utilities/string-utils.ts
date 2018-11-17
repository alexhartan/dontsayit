export class StringUtils{
    public static getUid(): string{
        
        return Math.random().toString(36).substr(2, 5);
    }
}