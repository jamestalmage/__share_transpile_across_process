#
# Makefile for http-tiny
#  written by L. Demailly
#
#  (c)1998 Laurent Demailly
#  (c)1996 Observatoire de Paris
#
# $Id: Makefile,v 1.2 1998/09/23 06:17:55 dl Exp $
#
#

# Check the following :

prefix=/usr/local

# where to install executable
BINDIR=$(prefix)/bin
# where to put man pages
MANDIR=$(prefix)/man
# where to put lib
LIBDIR=$(prefix)/lib
# where to put include
INCDIR=$(prefix)/include

# Your compiler
CC = gcc
# Compile flags
CDEBUGFLAGS = -O -Wmissing-prototypes -Wall -ansi -pedantic
#CDEBUGFLAGS = -O

# defines (needed for string ops on linux2/glibc for instance):
DEFINES= -D_XOPEN_SOURCE -D_XOPEN_SOURCE_EXTENDED

# for HPUX (ansi)
#DEFINES= -D_HPUX_SOURCE
# for solaris some defines are needed for strncmp,... but can't find the good
# one... maybe the one above (for linux) work too, I haven't checked yet.
#DEFINES= -D
# others, may need something...


# Solaris
#SYSLIBS= -lsocket -lnsl

#INCLPATH =

# mostly standard
RM= rm -f
CP = cp -f
CHMOD= chmod
MKDIR= mkdir -p
AR = ar
RANLIB = ranlib
TAR= gtar

# no edit should be needed below...

CFLAGS = $(CDEBUGFLAGS) $(INCLPATH) $(DEFINES)
LDFLAGS= $(CFLAGS) -L.

LIBOBJS =  http_lib.o

TARGETS = libhttp.a http

all: $(TARGETS)

http:  http.o libhttp.a
	$(CC) $(LDFLAGS) $@.o -lhttp $(SYSLIBS) -o $@

libhttp.a:   $(LIBOBJS)
	$(RM) $@
	$(AR) r $@ $(LIBOBJS)
	$(RANLIB) $@

install: $(TARGETS)
	$(CP) http $(BINDIR)
	$(CP) libhttp.a $(LIBDIR)
	$(CP) man1/http.1 $(MANDIR)/man1
	$(CP) man3/http_lib.3 $(MANDIR)/man3
	$(CP) http_lib.h $(INCDIR)

clean: 
	$(RM) $(TARGETS)
	$(RM) *.tgz
	$(RM) *.o
	$(RM) *~
	$(RM) #*
	$(RM) core

depend:
	makedepend $(INCLPATH) $(DEFINES) *.c

# internal use

man3: http_lib.c
	$(MKDIR) $@
	( cd $@ ; c2man -i \"http_lib.h\" -ngv -ls ../http_lib.c )

fdoc:
	$(RM) -r man3
	$(MAKE) man3

pure:
	$(MAKE) clean
	$(MAKE) CC="purify gcc -g"

tar:
	$(MAKE) clean
	$(RM) -r http-tiny-$(VERSION)
	$(RM) -f http-tiny-*.tar.gz
	$(MKDIR) http-tiny-$(VERSION)
	-$(CP) * http-tiny-$(VERSION)
	$(TAR) cf - man1 | (cd http-tiny-$(VERSION) ; $(TAR) xvf - )
	$(TAR) cf - man3 | (cd http-tiny-$(VERSION) ; $(TAR) xvf - )
	$(TAR) cvfz http-tiny-$(VERSION).tar.gz http-tiny-$(VERSION)

#distrib: tar
#	$(CP) http-tiny-$(VERSION).tar.gz /poubelle/ftp/www/
#	$(CP) http-tiny-$(VERSION).tar.gz /users/dl/public_html/


# DO NOT DELETE THIS LINE -- make depend depends on it.

http.o: /usr/include/sys/types.h /usr/include/sys/appleapiopts.h
http.o: /usr/include/sys/cdefs.h /usr/include/sys/_symbol_aliasing.h
http.o: /usr/include/sys/_posix_availability.h /usr/include/machine/types.h
http.o: /usr/include/i386/types.h /usr/include/i386/_types.h
http.o: /usr/include/sys/_types/_int8_t.h /usr/include/sys/_types/_int16_t.h
http.o: /usr/include/sys/_types/_int32_t.h /usr/include/sys/_types/_int64_t.h
http.o: /usr/include/sys/_types/_intptr_t.h
http.o: /usr/include/sys/_types/_uintptr_t.h /usr/include/sys/_types.h
http.o: /usr/include/machine/_types.h
http.o: /usr/include/sys/_pthread/_pthread_types.h
http.o: /usr/include/machine/endian.h /usr/include/i386/endian.h
http.o: /usr/include/sys/_endian.h /usr/include/libkern/_OSByteOrder.h
http.o: /usr/include/libkern/i386/_OSByteOrder.h
http.o: /usr/include/sys/_types/_dev_t.h /usr/include/sys/_types/_blkcnt_t.h
http.o: /usr/include/sys/_types/_blksize_t.h /usr/include/sys/_types/_gid_t.h
http.o: /usr/include/sys/_types/_in_addr_t.h
http.o: /usr/include/sys/_types/_in_port_t.h /usr/include/sys/_types/_ino_t.h
http.o: /usr/include/sys/_types/_ino64_t.h /usr/include/sys/_types/_key_t.h
http.o: /usr/include/sys/_types/_mode_t.h /usr/include/sys/_types/_nlink_t.h
http.o: /usr/include/sys/_types/_id_t.h /usr/include/sys/_types/_pid_t.h
http.o: /usr/include/sys/_types/_off_t.h /usr/include/sys/_types/_uid_t.h
http.o: /usr/include/sys/_types/_clock_t.h /usr/include/sys/_types/_size_t.h
http.o: /usr/include/sys/_types/_ssize_t.h /usr/include/sys/_types/_time_t.h
http.o: /usr/include/sys/_types/_useconds_t.h
http.o: /usr/include/sys/_types/_suseconds_t.h
http.o: /usr/include/sys/_types/_rsize_t.h /usr/include/sys/_types/_errno_t.h
http.o: /usr/include/sys/_types/_fd_def.h
http.o: /usr/include/sys/_types/_fd_setsize.h
http.o: /usr/include/sys/_types/_fd_set.h /usr/include/sys/_types/_fd_clr.h
http.o: /usr/include/sys/_types/_fd_zero.h
http.o: /usr/include/sys/_types/_fd_isset.h
http.o: /usr/include/sys/_types/_fd_copy.h
http.o: /usr/include/sys/_pthread/_pthread_attr_t.h
http.o: /usr/include/sys/_pthread/_pthread_cond_t.h
http.o: /usr/include/sys/_pthread/_pthread_condattr_t.h
http.o: /usr/include/sys/_pthread/_pthread_mutex_t.h
http.o: /usr/include/sys/_pthread/_pthread_mutexattr_t.h
http.o: /usr/include/sys/_pthread/_pthread_once_t.h
http.o: /usr/include/sys/_pthread/_pthread_rwlock_t.h
http.o: /usr/include/sys/_pthread/_pthread_rwlockattr_t.h
http.o: /usr/include/sys/_pthread/_pthread_t.h
http.o: /usr/include/sys/_pthread/_pthread_key_t.h
http.o: /usr/include/sys/_types/_fsblkcnt_t.h
http.o: /usr/include/sys/_types/_fsfilcnt_t.h /usr/include/sys/uio.h
http.o: /usr/include/sys/_types/_iovec_t.h /usr/include/unistd.h
http.o: /usr/include/_types.h /usr/include/sys/unistd.h
http.o: /usr/include/sys/_types/_posix_vdisable.h
http.o: /usr/include/sys/_types/_seek_set.h /usr/include/_types/_uint64_t.h
http.o: /usr/include/Availability.h /usr/include/AvailabilityInternal.h
http.o: /usr/include/sys/_types/_null.h /usr/include/sys/select.h
http.o: /usr/include/sys/_types/_timespec.h
http.o: /usr/include/sys/_types/_timeval.h
http.o: /usr/include/sys/_types/_sigset_t.h /usr/include/sys/_select.h
http.o: /usr/include/sys/_types/_uuid_t.h /usr/include/gethostuuid.h
http.o: /usr/include/stdio.h /usr/include/sys/_types/_va_list.h
http.o: /usr/include/sys/stdio.h /usr/include/secure/_stdio.h
http.o: /usr/include/secure/_common.h /usr/include/stdlib.h
http.o: /usr/include/sys/wait.h /usr/include/sys/signal.h
http.o: /usr/include/machine/signal.h /usr/include/i386/signal.h
http.o: /usr/include/machine/_mcontext.h /usr/include/i386/_mcontext.h
http.o: /usr/include/mach/i386/_structs.h
http.o: /usr/include/sys/_types/_sigaltstack.h
http.o: /usr/include/sys/_types/_ucontext.h /usr/include/sys/resource.h
http.o: /usr/include/stdint.h /usr/include/_types/_uint8_t.h
http.o: /usr/include/_types/_uint16_t.h /usr/include/_types/_uint32_t.h
http.o: /usr/include/_types/_intmax_t.h /usr/include/_types/_uintmax_t.h
http.o: /usr/include/alloca.h /usr/include/sys/_types/_ct_rune_t.h
http.o: /usr/include/sys/_types/_rune_t.h /usr/include/sys/_types/_wchar_t.h
http.o: /usr/include/string.h /usr/include/strings.h
http.o: /usr/include/secure/_string.h http_lib.h
http_lib.o: /usr/include/sys/types.h /usr/include/sys/appleapiopts.h
http_lib.o: /usr/include/sys/cdefs.h /usr/include/sys/_symbol_aliasing.h
http_lib.o: /usr/include/sys/_posix_availability.h
http_lib.o: /usr/include/machine/types.h /usr/include/i386/types.h
http_lib.o: /usr/include/i386/_types.h /usr/include/sys/_types/_int8_t.h
http_lib.o: /usr/include/sys/_types/_int16_t.h
http_lib.o: /usr/include/sys/_types/_int32_t.h
http_lib.o: /usr/include/sys/_types/_int64_t.h
http_lib.o: /usr/include/sys/_types/_intptr_t.h
http_lib.o: /usr/include/sys/_types/_uintptr_t.h /usr/include/sys/_types.h
http_lib.o: /usr/include/machine/_types.h
http_lib.o: /usr/include/sys/_pthread/_pthread_types.h
http_lib.o: /usr/include/machine/endian.h /usr/include/i386/endian.h
http_lib.o: /usr/include/sys/_endian.h /usr/include/libkern/_OSByteOrder.h
http_lib.o: /usr/include/libkern/i386/_OSByteOrder.h
http_lib.o: /usr/include/sys/_types/_dev_t.h
http_lib.o: /usr/include/sys/_types/_blkcnt_t.h
http_lib.o: /usr/include/sys/_types/_blksize_t.h
http_lib.o: /usr/include/sys/_types/_gid_t.h
http_lib.o: /usr/include/sys/_types/_in_addr_t.h
http_lib.o: /usr/include/sys/_types/_in_port_t.h
http_lib.o: /usr/include/sys/_types/_ino_t.h
http_lib.o: /usr/include/sys/_types/_ino64_t.h
http_lib.o: /usr/include/sys/_types/_key_t.h
http_lib.o: /usr/include/sys/_types/_mode_t.h
http_lib.o: /usr/include/sys/_types/_nlink_t.h
http_lib.o: /usr/include/sys/_types/_id_t.h /usr/include/sys/_types/_pid_t.h
http_lib.o: /usr/include/sys/_types/_off_t.h /usr/include/sys/_types/_uid_t.h
http_lib.o: /usr/include/sys/_types/_clock_t.h
http_lib.o: /usr/include/sys/_types/_size_t.h
http_lib.o: /usr/include/sys/_types/_ssize_t.h
http_lib.o: /usr/include/sys/_types/_time_t.h
http_lib.o: /usr/include/sys/_types/_useconds_t.h
http_lib.o: /usr/include/sys/_types/_suseconds_t.h
http_lib.o: /usr/include/sys/_types/_rsize_t.h
http_lib.o: /usr/include/sys/_types/_errno_t.h
http_lib.o: /usr/include/sys/_types/_fd_def.h
http_lib.o: /usr/include/sys/_types/_fd_setsize.h
http_lib.o: /usr/include/sys/_types/_fd_set.h
http_lib.o: /usr/include/sys/_types/_fd_clr.h
http_lib.o: /usr/include/sys/_types/_fd_zero.h
http_lib.o: /usr/include/sys/_types/_fd_isset.h
http_lib.o: /usr/include/sys/_types/_fd_copy.h
http_lib.o: /usr/include/sys/_pthread/_pthread_attr_t.h
http_lib.o: /usr/include/sys/_pthread/_pthread_cond_t.h
http_lib.o: /usr/include/sys/_pthread/_pthread_condattr_t.h
http_lib.o: /usr/include/sys/_pthread/_pthread_mutex_t.h
http_lib.o: /usr/include/sys/_pthread/_pthread_mutexattr_t.h
http_lib.o: /usr/include/sys/_pthread/_pthread_once_t.h
http_lib.o: /usr/include/sys/_pthread/_pthread_rwlock_t.h
http_lib.o: /usr/include/sys/_pthread/_pthread_rwlockattr_t.h
http_lib.o: /usr/include/sys/_pthread/_pthread_t.h
http_lib.o: /usr/include/sys/_pthread/_pthread_key_t.h
http_lib.o: /usr/include/sys/_types/_fsblkcnt_t.h
http_lib.o: /usr/include/sys/_types/_fsfilcnt_t.h /usr/include/sys/socket.h
http_lib.o: /usr/include/machine/_param.h /usr/include/i386/_param.h
http_lib.o: /usr/include/Availability.h /usr/include/AvailabilityInternal.h
http_lib.o: /usr/include/sys/_types/_sa_family_t.h
http_lib.o: /usr/include/sys/_types/_socklen_t.h
http_lib.o: /usr/include/sys/_types/_iovec_t.h /usr/include/netinet/in.h
http_lib.o: /usr/include/stdint.h /usr/include/_types/_uint8_t.h
http_lib.o: /usr/include/_types/_uint16_t.h /usr/include/_types/_uint32_t.h
http_lib.o: /usr/include/_types/_uint64_t.h /usr/include/_types/_intmax_t.h
http_lib.o: /usr/include/_types/_uintmax_t.h /usr/include/netinet6/in6.h
http_lib.o: /usr/include/arpa/inet.h /usr/include/netdb.h
http_lib.o: /usr/include/_types.h /usr/include/ctype.h
http_lib.o: /usr/include/runetype.h /usr/include/sys/_types/_ct_rune_t.h
http_lib.o: /usr/include/sys/_types/_rune_t.h
http_lib.o: /usr/include/sys/_types/_wchar_t.h
http_lib.o: /usr/include/sys/_types/_wint_t.h /usr/include/string.h
http_lib.o: /usr/include/sys/_types/_null.h /usr/include/strings.h
http_lib.o: /usr/include/secure/_string.h /usr/include/secure/_common.h
http_lib.o: /usr/include/unistd.h /usr/include/sys/unistd.h
http_lib.o: /usr/include/sys/_types/_posix_vdisable.h
http_lib.o: /usr/include/sys/_types/_seek_set.h /usr/include/sys/select.h
http_lib.o: /usr/include/sys/_types/_timespec.h
http_lib.o: /usr/include/sys/_types/_timeval.h
http_lib.o: /usr/include/sys/_types/_sigset_t.h /usr/include/sys/_select.h
http_lib.o: /usr/include/sys/_types/_uuid_t.h /usr/include/gethostuuid.h
http_lib.o: /usr/include/stdlib.h /usr/include/sys/wait.h
http_lib.o: /usr/include/sys/signal.h /usr/include/machine/signal.h
http_lib.o: /usr/include/i386/signal.h /usr/include/machine/_mcontext.h
http_lib.o: /usr/include/i386/_mcontext.h /usr/include/mach/i386/_structs.h
http_lib.o: /usr/include/sys/_types/_sigaltstack.h
http_lib.o: /usr/include/sys/_types/_ucontext.h /usr/include/sys/resource.h
http_lib.o: /usr/include/alloca.h /usr/include/stdio.h
http_lib.o: /usr/include/sys/_types/_va_list.h /usr/include/sys/stdio.h
http_lib.o: /usr/include/secure/_stdio.h http_lib.h
