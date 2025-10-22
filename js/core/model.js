const model = {
    app: {
        currentPage: 'Dashboard',
        currentUserId: 0,
        previousPage: [],

    },
    input: {
        loginPage: {
            username: '',
            password: '',
        },
        assignmentPage: {
            assignmentID: null,
            title: '',
            description: '',
            subject: '',
            tag: '',
            groupID: '',
            date: '',
            status: 'draft',
            attachment: null,
        },
        answerPage: {
            userID: null,
            assignmentID: null,
            answerText: '',
        },
        messages: {
            messageID: null,
            userID: null,
            groupID: null,
            toUserID: null,
            content: '',
            date: ''
        },
        notifications: {
            notificationID: null,
            userID: null,
            content: '',
            date: '',
            isRead: undefined,
        },
        createGroup: {
            groupID: null,
            groupName: '',
            members: [],
        },
        createUser: {
            userID: null,
            groupID: [],
            classID: null,
            username: '',
            password: '',
            isAdmin: undefined,
        },
    },
    data: {
        users: {
            userID: 0,
            groupID: [0, 1],
            classID: 0,
            username: 'admin',
            password: 'admin',
            isAdmin: true,
        },

        assignmentPage: {
            assignmentID: 0,
            title: 'Growth Mindset',
            description: 'Oppgaveinnhold om Growth Mindset',
            subject: 'Growth Mindset',
            tag: 'Fixed vs Growth Mindset',
            groupID: [0, 1],
            date: '10/17/2025',
            attachment: 'growth_mindset.pdf',
        },
        answerPage: {
            userID: 0,
            assignmentID: 0,
            answerText: 'Svart på oppgaven om Growth Mindset',
        },
        messages: {
            messageID: 0,
            userID: 0,
            groupID: 1,
            toUserID: 2,
            content: 'Hei student, hvordan kan jeg hjelpe deg?',
            date: '2025-10-19 09:00'
        },
        notifications: {
            notificationID: 0,
            userID: 0,
            content: 'Du har en ny melding fra læreren din.',
            date: '2025-10-19 10:00',
            isRead: false,
        },
        groups: {
            groupID: 0,
            groupName: 'Studentgruppe 1',
            members: [0, 1, 2],
        },
    }
}