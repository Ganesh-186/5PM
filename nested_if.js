let score =85;

    // Outer if: Pass or Fail
    if (score >= 50) {
        console.log("Status: Pass");

        // Nested if: Determine grade category
        if (score >= 90) {
            console.log("Grade: A");
            if (score >= 95) {
                console.log("Honors: High Distinction");
            }

        } else if (score >= 70) {
            console.log("Grade: B");
        } else {
            console.log("Grade: C");
        }

    } else {
        console.log("Status: Fail");
        
        if (score >= 45) {
            console.log("Remark: Almost passed, needs slight improvement.");
        } else {
            console.log("Remark: Needs significant improvement.");
        }
    }

