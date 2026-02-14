provider "aws" {
  region  = var.region
  profile = "devops-capstone"
}
data "aws_vpc" "default" {
  default = true

}

resource "aws_security_group" "devop_capstone_sg" {
  name        = "devop-capstone-sg"
  description = "Security group for Devops capstone project"
  vpc_id      = data.aws_vpc.default.id

  ingress {
    description = "ssh"
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    description = "http"
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    description = "https"
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
  tags = {
    Name = "Devop-Capstone-SG"
  }
}



resource "aws_instance" "devop_capstone_instance" {
  ami                    = var.ami
  instance_type          = var.instance_type
  key_name               = var.key_name
  vpc_security_group_ids = [aws_security_group.devop_capstone_sg.id]

  tags = {
    Name = "Devop-Capstone-Instance"
  }
}
