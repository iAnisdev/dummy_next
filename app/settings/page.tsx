// import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
// import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
// import React from 'react';

// const SmallDataTableCard = () => {
//   const data = [
//     { column1: 'Row 1 Col 1', column2: 'Row 1 Col 2' },
//     { column1: 'Row 2 Col 1', column2: 'Row 2 Col 2' },
//     { column1: 'Row 3 Col 1', column2: 'Row 3 Col 2' },
//     { column1: 'Row 4 Col 1', column2: 'Row 4 Col 2' },
//     { column1: 'Row 5 Col 1', column2: 'Row 5 Col 2' },
//   ];

//   return (
//     <Form {...form}>
//       <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
//         <FormField
//           control={form.control}
//           name="type"
//           render={({ field }) => (
//             <FormItem className="space-y-3">
//               <FormLabel>Notify me about...</FormLabel>
//               <FormControl>
//                 <RadioGroup
//                   onValueChange={field.onChange}
//                   defaultValue={field.value}
//                   className="flex flex-col space-y-1"
//                 >
//                   <FormItem className="flex items-center space-x-3 space-y-0">
//                     <FormControl>
//                       <RadioGroupItem value="all" />
//                     </FormControl>
//                     <FormLabel className="font-normal">
//                       All new messages
//                     </FormLabel>
//                   </FormItem>
//                   <FormItem className="flex items-center space-x-3 space-y-0">
//                     <FormControl>
//                       <RadioGroupItem value="mentions" />
//                     </FormControl>
//                     <FormLabel className="font-normal">
//                       Direct messages and mentions
//                     </FormLabel>
//                   </FormItem>
//                   <FormItem className="flex items-center space-x-3 space-y-0">
//                     <FormControl>
//                       <RadioGroupItem value="none" />
//                     </FormControl>
//                     <FormLabel className="font-normal">Nothing</FormLabel>
//                   </FormItem>
//                 </RadioGroup>
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <div>
//           <h3 className="mb-4 text-lg font-medium">Email Notifications</h3>
//           <div className="space-y-4">
//             <FormField
//               control={form.control}
//               name="communication_emails"
//               render={({ field }) => (
//                 <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
//                   <div className="space-y-0.5">
//                     <FormLabel className="text-base">
//                       Communication emails
//                     </FormLabel>
//                     <FormDescription>
//                       Receive emails about your account activity.
//                     </FormDescription>
//                   </div>
//                   <FormControl>
//                     <Switch
//                       checked={field.value}
//                       onCheckedChange={field.onChange}
//                     />
//                   </FormControl>
//                 </FormItem>
//               )}
//             />
//             <FormField
//               control={form.control}
//               name="marketing_emails"
//               render={({ field }) => (
//                 <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
//                   <div className="space-y-0.5">
//                     <FormLabel className="text-base">
//                       Marketing emails
//                     </FormLabel>
//                     <FormDescription>
//                       Receive emails about new products, features, and more.
//                     </FormDescription>
//                   </div>
//                   <FormControl>
//                     <Switch
//                       checked={field.value}
//                       onCheckedChange={field.onChange}
//                     />
//                   </FormControl>
//                 </FormItem>
//               )}
//             />
//             <FormField
//               control={form.control}
//               name="social_emails"
//               render={({ field }) => (
//                 <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
//                   <div className="space-y-0.5">
//                     <FormLabel className="text-base">Social emails</FormLabel>
//                     <FormDescription>
//                       Receive emails for friend requests, follows, and more.
//                     </FormDescription>
//                   </div>
//                   <FormControl>
//                     <Switch
//                       checked={field.value}
//                       onCheckedChange={field.onChange}
//                     />
//                   </FormControl>
//                 </FormItem>
//               )}
//             />
//             <FormField
//               control={form.control}
//               name="security_emails"
//               render={({ field }) => (
//                 <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
//                   <div className="space-y-0.5">
//                     <FormLabel className="text-base">Security emails</FormLabel>
//                     <FormDescription>
//                       Receive emails about your account activity and security.
//                     </FormDescription>
//                   </div>
//                   <FormControl>
//                     <Switch
//                       checked={field.value}
//                       onCheckedChange={field.onChange}
//                       disabled
//                       aria-readonly
//                     />
//                   </FormControl>
//                 </FormItem>
//               )}
//             />
//           </div>
//         </div>
//         <FormField
//           control={form.control}
//           name="mobile"
//           render={({ field }) => (
//             <FormItem className="flex flex-row items-start space-x-3 space-y-0">
//               <FormControl>
//                 <Checkbox
//                   checked={field.value}
//                   onCheckedChange={field.onChange}
//                 />
//               </FormControl>
//               <div className="space-y-1 leading-none">
//                 <FormLabel>
//                   Use different settings for my mobile devices
//                 </FormLabel>
//                 <FormDescription>
//                   You can manage your mobile notifications in the{' '}
//                   <Link href="/examples/forms">mobile settings</Link> page.
//                 </FormDescription>
//               </div>
//             </FormItem>
//           )}
//         />
//         <Button type="submit">Update notifications</Button>
//       </form>
//     </Form>
//   );
// };

// export default SmallDataTableCard;
