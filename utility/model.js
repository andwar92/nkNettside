const model = {
    app: {

    },
    input: {
        loginPage: {
            username: '',
            password: '',
        },
        assignmentPage: {
            assignmentID: 0,
            title: '',
            description: '',
            subject: '',
            tag: '',
            groupID: '',
            date: '',
            attachment: null,
        }
    },
    data: {
        users: {
            userID: 0,
            username: 'admin',
            password: 'admin',
        },

        assignmentPage: {
            assignmentID: 0,
            title: 'Growth Mindset',
            description: 'Oppgaveinnhold om Growth Mindset',
            subject: 'Growth Mindset',
            tag: 'Fixed vs Growth Mindset',
            groupID: [0,1],
            date: '10/17/2025',
            attachment: 'growth_mindset.pdf',
        }
    },
}