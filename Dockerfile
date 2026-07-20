# Step 1: Use Apache HTTP Server Image
FROM httpd:2.4
# Step 2: Set Working Directory
WORKDIR /usr/local/apache2/htdocs/
# Step 3: Copy Website Files
COPY . /usr/local/apache2/htdocs/
# Step 4: Expose Port
EXPOSE 80
# Step 5: Start Apache
CMD ["httpd-foreground"]