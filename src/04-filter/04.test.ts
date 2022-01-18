test('should take old man', () => {
        const ages = [10, 12, 22, 1, 100, 90, 14];

        const oldAges = ages.filter(age => age > 90);


        expect(oldAges.length).toBe(1);
        expect(oldAges[0]).toBe(100);

    }
)
;
test('should take cheapest courses', () => {
        const courses = [
            {title: "CSS", price: 110},
            {title: "JS", price: 200},
            {title: "REACT", price: 150}]

        const chipCourses = courses.filter(course => course.price < 160);


        expect(chipCourses.length).toBe(2);
        expect(chipCourses[0].title).toBe("CSS");
        expect(chipCourses[1].title).toBe("REACT");

    }
)

test("get only completed tasks", () => {
    const tasks = [
        {id:1, title:'bread', isDone:false},
        {id:2, title:'milk', isDone:true},
        {id:3, title:'salt', isDone:false},
        {id:4, title:'sugar', isDone:true},
    ]

    const CompletedTask=tasks.filter(task=>task.isDone)

    expect(CompletedTask.length).toBe(2);
    expect(CompletedTask[0].title).toBe("milk");
    expect(CompletedTask[1].title).toBe("sugar");
})