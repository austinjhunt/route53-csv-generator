# DNS Record List Generator

Small JavaScript snippet written for automatically traversing the AWS Route 53 DNS Record list and generating both a CSV and a basic array containing all of the records across the 15+ pages that are in the account.

## How to Use

1. Open the DNS record list in Route 53
2. Open dev tools on the same page that you have the DNS record list open.
3. Make sure you are on the first page of the table.
4. Copy the JavaScript content and past it into the Console within dev tools.
5. Make sure the `numTablePages` argument to the `collectDNSRecordsCSV` function correctly reflects the total number of pages in the table.
6. Press Enter to Execute
7. After it finishes you should see that you are now on the last page of the table. This is because the JS function parsed through each page.
8. You can type `csvdata` into the Console and press enter to see the return value of the function.
9. It's already been copied to your clipboard so you can open a CSV file and paste the content.
10. That's it.
