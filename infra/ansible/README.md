# Ansible Deployment (EC2)

This folder contains the Ansible code used to deploy the Phone E-Commerce Docker image to an AWS EC2 instance.

The playbook connects to EC2 via SSH, installs required packages (and Docker if needed), pulls the latest Docker image from Docker Hub, and runs the container with the configured port mapping.

What this deploys

- Docker image: ogshabzy23101/phone-e-commerce:latest
- Container name: myapp_container
- Container port: 80
- Host port: 80 (so the app is reachable via http://<EC2_PUBLIC_IP>)

Folder structure

- playbooks/site.yml
  Main entry point that runs the roles in order.
- roles/common/
  System preparation tasks (updates + essential packages + Docker setup if included).
- roles/web/
  Application deployment tasks (pull image, remove old container, start new container).
- inventory/hosts.ini
  Target hosts (EC2) definition.
- group_vars/web.yml
  Variables for the web host group (image name/tag, container name, ports).

Prerequisites

On your local machine (control node):

- Ansible installed
- SSH access to EC2 (keypair .pem)
- EC2 Security Group allows:
  - SSH (22) from your IP
  - HTTP (80) from anywhere (or your IP)

On EC2 (target host):

- Ubuntu instance
- Python installed (usually already available on Ubuntu)
- Docker installed if not handled by the playbook

Configure inventory

Edit inventory/hosts.ini to match your EC2 details:

Example:

[web]
ec2 ansible_host=<EC2_PUBLIC_IP> ansible_user=ubuntu ansible_ssh_private_key_file=~/.ssh/.pem

Tip: If you are using Elastic IP, put the Elastic IP here so it stays stable.

Configure variables

Edit group_vars/web.yml:

common_packages:
• git
• curl
• unzip

docker_image_name: “ogshabzy23101/phone-e-commerce”
docker_image_tag: “latest”
docker_container_name: “myapp_container”
docker_container_port: 80
host_port: 80

Run deployment

From infra/ansible/:

ansible-playbook -i inventory/hosts.ini playbooks/site.yml

After a successful run, open:

http://<EC2_PUBLIC_IP>

Verify on EC2

SSH into EC2 and run:

docker ps
docker images
