{
    /**
     * Enum
     */

    // JS
    const DAYS_ENUM = Object.freeze({"MONDAY": 0, "TUESDAY": 1, "WEDNESDAY": 2});
    const dayOfToday = DAYS_ENUM.MONDAY;

    // TS
    type DaysOfWeek = 'Monday' | 'Tuesday' | 'Wednesday'; // union을 주로 씀
    enum Days{ // 잘안씀
        Monday,
        Tuesday,
        Wednesday
    }
    console.log(Days.Tuesday);
    let day: Days = Days.Monday;
    day = Days.Tuesday;
    day = 10;
    console.log(day);

    let dayOfweek: DaysOfWeek = 'Monday';
    dayOfweek = 'Tuesday';
}