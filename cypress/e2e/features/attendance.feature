Feature: Home Page

    Scenario: Check the presence of Attendance and Current Schedule components
        Given I am on the Home page
        Then I should see the Attendance component
        And I should see the Current Schedule component
        And I see the 'Teacher' and 'Attendance' columns
        And I see the current schedule with 'Student', 'Subject' and 'Teacher' columns
        And I see the current present teacher
        And I see the current schedule student with alocated teacher


    Scenario: Update teacher attendance and see the student is assigned to an available present teacher
        Given I am on the Home page
        # Other steps here...
        When I Update teacher attendance 4 to "Absent" from the dropdown
        Then The teacher 4 attendance status should be updated to "Absent"
        Then The student 1 teacher should be updated to "Rubeus Hagrid"

    Scenario: Update all teacher attendance to Absent in hierarchy and see the student teacher column show "Not assign"
        Given I am on the Home page
        # Other steps here...
        When I Update teacher attendance 4 to "Absent" from the dropdown
        Then The teacher 4 attendance status should be updated to "Absent"
        Then The student 1 teacher should be updated to "Rubeus Hagrid"

        When I Update teacher attendance 3 to "Absent" from the dropdown
        Then The teacher 3 attendance status should be updated to "Absent"
        Then The student 1 teacher should be updated to "Minerva McGonagall"

        When I Update teacher attendance 2 to "Absent" from the dropdown
        Then The teacher 3 attendance status should be updated to "Absent"
        Then The student 1 teacher should be updated to "Professor Dumbledore"

        When I Update teacher attendance 1 to "Absent" from the dropdown
        Then The teacher 3 attendance status should be updated to "Absent"
        Then The student 1 teacher should be updated to "Not assign"