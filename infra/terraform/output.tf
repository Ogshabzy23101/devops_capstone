output "public_ip" {
  value = aws_instance.devop_capstone_instance.public_ip
}

output "SSH_command" {
  value = "ssh -i ${var.key_name}.pem ec2-user@${aws_instance.devop_capstone_instance.public_ip}"
}