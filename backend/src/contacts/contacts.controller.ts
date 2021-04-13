import { Controller } from '@nestjs/common';
import { ContactService } from '../contact/contact.service';

import { Get, Post,Put, Delete, Body, Param } from  '@nestjs/common';
import { Contact } from  '../entities/contact.entity';


@Controller('contacts') //'contacts' is the base path for the below requests
export class ContactsController {
	constructor(private contactService: ContactService){
    }

    @Get()
    read(): Promise<Contact[]> {
      return this.contactService.readAll();
    }

    @Get(':id/')
    readOne(@Param('id') id): Promise<Contact>{
    	return this.contactService.readOne(id);
    }
    
    @Post('create')
    async create(@Body() contact: Contact): Promise<any> {
      return this.contactService.create(contact);
    }  
    
    @Put(':id/update')
    async update(@Param('id') id, @Body() contact: Contact): Promise<any> {
        contact.id = Number(id);
        return this.contactService.update(contact);
    }  
    
    @Delete(':id/delete')
    async delete(@Param('id') id): Promise<any> {
      return this.contactService.delete(id);
    }
}
