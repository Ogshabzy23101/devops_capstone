# Terraform – Infrastructure Provisioning

This directory contains Terraform code used to provision the initial infrastructure
for the DevOps Capstone project.

## What this phase covers

- AWS provider configuration using a named profile
- EC2 instance provisioning in eu-west-2
- Security group creation allowing SSH access
- Output of public IP and SSH command

## Structure

- main.tf - Core infrastructure resources
- variables.tf - Input variables
- outputs.tf - Exposed outputs (IP, SSH command)
- terraform.tfstate - Local state

## How to use

Initialize Terraform:
terraform init

Preview changes:
terraform plan

Apply infrastructure:
terraform apply

## Notes

- This phase focuses strictly on infrastructure provisioning.
- No application or configuration logic is applied at this stage.
- Configuration management will be handled in a later phase using Ansible.
